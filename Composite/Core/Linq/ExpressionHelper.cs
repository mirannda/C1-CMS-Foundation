﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Composite.Data;
using Composite.Core.Linq;


namespace Composite.Core.Linq
{
	internal static class ExpressionHelper
	{
        public static List<object> GetObjects(Type interfaceType, Expression sourceExpression)
        {
            List<object> result = DataFacade.GetData(interfaceType).Provider.CreateQuery(sourceExpression).ToListOfObjects();

            return result;
        }



        public static List<T> GetCastedObjects<T>(Type interfaceType, Expression sourceExpression)
        {
            List<T> result =
                DataFacade.GetData(interfaceType).Provider.CreateQuery(sourceExpression).
                    ToEnumerableOfObjects().
                    Cast<T>().
                    ToList();

            return result;
        }



        public static Expression CreatePropertyExpression(string fieldName, Expression parameterExpression)
        {
            Type interfaceType = parameterExpression.Type;

            if (interfaceType.GetProperties().Any(f => f.Name == fieldName))
            {
                return Expression.Property(parameterExpression, fieldName);
            }


            foreach (Type superInterfaceType in interfaceType.GetInterfaces())
            {
                if (superInterfaceType.GetProperties().Any(f => f.Name == fieldName))
                {
                    return Expression.Property(Expression.Convert(parameterExpression, superInterfaceType), fieldName);
                }
            }

            throw new InvalidOperationException(string.Format("The interface '{0}' or any of its superinterfaces does not contain a field named '{1}'", parameterExpression.Type, fieldName));
        }



        public static Expression CreatePropertyExpression(Type currentInterfaceType, Type actualPropertyDeclaringType, string fieldName, ParameterExpression parameterExpression)
        {
            Expression fieldParameterExpression = GetPropertyParameterExpression(currentInterfaceType, actualPropertyDeclaringType, parameterExpression);

            Expression expression = ExpressionHelper.CreatePropertyExpression(fieldName, fieldParameterExpression);

            return expression;
        }



        public static Expression GetPropertyParameterExpression(Type currentInterfaceType, Type actualPropertyDeclaringType, ParameterExpression parameterExpression)
        {
            if (currentInterfaceType == actualPropertyDeclaringType) return parameterExpression;

            return Expression.Convert(parameterExpression, actualPropertyDeclaringType);
        }



        public static Expression CreateWhereExpression(Expression sourceExpression, ParameterExpression parameterExpression, Expression filterExpression)
        {
            if (filterExpression == null) return sourceExpression;

            LambdaExpression whereLambdaExpression = Expression.Lambda(filterExpression, parameterExpression);
            Expression whereExpression = ExpressionCreator.Where(sourceExpression, whereLambdaExpression);

            return whereExpression;
        }



        public static Expression CreateSelectExpression(Expression sourceExpression, Expression bodyExpression, ParameterExpression parameterExpression)
        {
            LambdaExpression selectLambdaExpression = Expression.Lambda(bodyExpression, parameterExpression);

            Expression selectExpression = ExpressionCreator.Select(sourceExpression, selectLambdaExpression);

            return selectExpression;
        }



        public static Expression CreateDistinctExpression(Expression sourceExpression)
        {
            Expression distinctExpression = ExpressionCreator.Distinct(sourceExpression);

            return distinctExpression;
        }



        public static Expression CreateOrderByExpression(Expression sourceExpression, LambdaExpression predicate)
        {
            Expression orderByExpression = ExpressionCreator.OrderBy(sourceExpression, predicate);

            return orderByExpression;
        }



        public static Expression CreateJoinExpression(Expression outerSource, Expression innerSource, LambdaExpression outerKeySelector, LambdaExpression innerKeySelector, LambdaExpression resultSelector)
        {
            Expression joinExpression = ExpressionCreator.Join(outerSource, innerSource, outerKeySelector, innerKeySelector, resultSelector);

            return joinExpression;
        }
	}
}

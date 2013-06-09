var JS;

JS = {};

/******************************************************************************
* Module: Class Field
*     
* Created: 11/16/12
* 
* Last Modified: 11/16/12
*                
* Package: JS.
*
* Extends: None.
*
* Events: None.
*
* Local Objects: None.
* 
* Methods: getName().
*
* Description: This class represents a field.
******************************************************************************/
JS.Field = function(FieldObj)
{ 															  /* Class Field */
	/* Methods */
	var getName;
	
	if (!FieldObj.name)
	{
		throw "Syntax Error: No Field Name Specified";
	}
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: FieldObj.name.
	* 
	* Description: Retrieves the name of this field.
	**************************************************************************/
	getName = function() 
	{
		return (FieldObj.name);	
	};
	
	return ({
		getName:getName
	});
}; 															  /* Class Field */

/******************************************************************************
* Module: Class Method
*     
* Created: 11/17/12
* 
* Last Modified: 11/17/12
*                
* Package: JS.
*
* Extends: None.
*
* Events: None.
*
* Local Objects: Code, Params.
* 
* Methods: getCode(), getName(), getParameters().
*
* Description: This class represents a method.
******************************************************************************/
JS.Method = function(MethodObj)
{ 															 /* Class Method */
	/* Fields */
	var Code;
	var Params;

	/* Methods */
	var getCode;
	var getName;
	var getParameters;
	
	if (!MethodObj.name)
	{
		throw "Syntax Error: No Method Name Specified";
	}

	Code = "";
	Params = (MethodObj.params) ? MethodObj.params : [];

	if (MethodObj.code)
	{
		Code = "\"" + MethodObj.code + "\"";
		Code = Code.substr(Code.indexOf("{") + 1);
		Code = Code.substr(0, Code.lastIndexOf("}"));
	}

	/**************************************************************************
	* Module: Method getCode
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Code.
	* 
	* Description: Retrieves the code of this method.
	**************************************************************************/
	getCode = function() 
	{ 														/* Method getCode */
		return (Code);
	}; 														/* Method getCode */

	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: MethodObj.name.
	* 
	* Description: Retrieves the name of this method.
	**************************************************************************/
	getName = function() 
	{ 													   /* Method getName */
		return (MethodObj.name);	
	}; 													   /* Method getName */

	/**************************************************************************
	* Module: Method getParameters
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Params.
	* 
	* Description: Retrieves the parameter list of this method.
	**************************************************************************/
	getParameters = function()
	{ 												 /* Method getParameters */
		return (Params);
	}; 												 /* Method getParameters */
	
	return ({
		getCode:getCode,
		getName:getName,
		getParameters:getParameters
	});
}; 															 /* Class Method */

/******************************************************************************
* Module: Class Class
*     
* Created: 11/17/12
* 
* Last Modified: 11/17/12
*                
* Package: JS.
*
* Extends: None.
*
* Events: None.
*
* Local Objects: ClassString.
* 
* Methods: classHeader(), classMethods(), classProperties().
*
* Description: This class represents a JavaScript class.
******************************************************************************/
JS.Class = function(ClassObj)
{															  /* Class Class */
	/* Methods */
	var constructor;
	var classHeader;
	var classMethods;
	var classProperties;
	
	/* Properties */
	var ClassString;
	
	/**************************************************************************
	* Module: Constructor class
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: Methods, Name, Properties.
	* 
	* Methods Called: classHeader(), classProperties(), classMethods().
	*
	* Returned Value: None.
	* 
	* Description: Initializes the Class class.
	**************************************************************************/
	constructor = function()
	{ 													/* Constructor Class */
		var Methods;
		var Name;
		var Properties;
		
		Methods = [];
		Name = "";
		Properties = [];
		
		classHeader();
		classProperties();
		classMethods();
		ClassString = ClassString + "\treturn (this);\n }";
	}; 													/* Constructor Class */

	/**************************************************************************
	* Module: Method classHeader
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: None.
	* 
	* Description: Writes out the class header.
	**************************************************************************/
	classHeader = function()
	{ 												   /* Method classHeader */
		if (!ClassObj.name)
		{
			throw "Syntax Error: No Class Name Specified";
		}

		ClassString = ClassObj.name + "=function()\n{\n";
	}; 													/* Class classHeader */
	
	/**************************************************************************
	* Module: Method classMethods
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: CurrentMethod, i, j, Params.
	* 
	* Methods Called: Method.getName(), Method.getParameters(), 
	*				  Method.getCode().
	*
	* Returned Value: None.
	* 
	* Description: Composes all of the class' methods.
	**************************************************************************/
	classMethods = function()
	{ 												  /* Method classMethods */
		var CurrentMethod;
		var i;
		var j;
		var Params;
		
		if (ClassObj.methods)
		{
			for (i = 0; i < ClassObj.methods.length; i++)
			{
				if (!(ClassObj.methods[i] instanceof JS.Method))
				{
					ClassObj.methods[i] = new JS.Method(ClassObj.methods[i]);
				}
				
				CurrentMethod = ClassObj.methods[i];
				ClassString = ClassString + "\tthis." + CurrentMethod.getName() + "=function(";

				Params = CurrentMethod.getParameters();
				if (Params.length > 0)
				{
					ClassString = ClassString + Params[0];
				}
				
				for (j = 1; j < Params.length; j++)
				{
					ClassString = ClassString + ", " + Params[j];
				}
				ClassString = ClassString + ")\n\t{\n";
				ClassString = ClassString + "\t" + CurrentMethod.getCode() + "\n";
				ClassString = ClassString + "\t}\n";
			}
			
			if (hasMethod("init"))
			{
				ClassString = ClassString + "\tthis.init();\n"
			}
		}
	}; 												  /* Method classMethods */
	
	/**************************************************************************
	* Module: Method classProperties
	*     
	* Created: 11/17/12
	* 
	* Last Modified: 11/17/12
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: CurrentProperty, i.
	* 
	* Methods Called: Field.getName().
	*
	* Returned Value: None.
	* 
	* Description: Composes all of a classes fields.
	**************************************************************************/
	classProperties = function() 
	{ 											   /* Method classProperties */
		var CurrentProperty;
		var i;

		if (ClassObj.properties)
		{
			for (i = 0; i < ClassObj.properties.length; i++)
			{
				CurrentProperty = ClassObj.properties[i];
				if (!(CurrentProperty instanceof JS.Field))
				{
					CurrentProperty = new JS.Field(CurrentProperty);
				}
				ClassString = ClassString + "\tthis." + CurrentProperty.getName() + "='';\n";
			}
		}		
	}; 											   /* Method classProperties */
	
	/**************************************************************************
	* Module: Method hasMethod
	*     
	* Created: 11/18/12
	* 
	* Last Modified: 11/18/12
	*                
	* Passed Parameters: MethodName.
	* 
	* Local Objects: i.
	* 
	* Methods Called: Method.getName().
	*
	* Returned Value: Boolean.
	* 
	* Description: Returns whether this class has a method with a specified 
	*			   name.
	**************************************************************************/
	hasMethod = function(MethodName)
	{ 													 /* Method hasMethod */
		var i;
		
		if (ClassObj.methods)
		{
			for (i = 0; i < ClassObj.methods.length; i++)
			{
				if (ClassObj.methods[i].getName() == MethodName)
				{
					return (true);
				}	
			}		
		}
		return (false);
	}; 													 /* Method hasMethod */

	constructor();
	eval(ClassString);
}; 															  /* Class Class */

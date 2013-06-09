/* JS Plus Version 1.0 
 Copyright Brian Ferris 2013
 This Code is Licensed Under the AGPL(http://www.gnu.org/licenses/agpl.html)

 * */

var JS = {};
JS.lang = {};
JS.lang.reflect = {};

/******************************************************************************
* Module: Class JSObject
*     
* Created: 04/25/10
* 
* Last Modified: 05/08/10
*                
* Package: JS.lang
*
* Extends: None.
*
* Events: None.
*
* Local Objects: None.
* 
* Methods: equals(), hashCode().
*
* Description: Class JSObject is the root of the class hierarchy. Every class 
* 			   has JSObject as a superclass. All objects implement the methods 
* 			   of this class.
******************************************************************************/
JS.lang.JSObject = function() 
{ 														   /* Class JSObject */
	/* Fields */
	var HashCode;
	
	/* Methods */
	var init;
	var equals;
	var hashCode;
	
	/**************************************************************************
	* Module: Constructor JSObject
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 04/25/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: None.
	* 
	* Description: Initializes the JSObject class.
	**************************************************************************/
	init = function()
	{ 												 /* Constructor JSObject */
		if (!JS.lang.JSObject.HASHCODE)
		{
			JS.lang.JSObject.HASHCODE = 0;
		}
		JS.lang.JSObject.HASHCODE++;
		HashCode = JS.lang.JSObject.HASHCODE;		
	}; 												 /* Constructor JSObject */
	
	/**************************************************************************
	* Module: Method equals
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 04/25/10
	*                
	* Passed Parameters: obj.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Boolean.
	* 
	* Description: Indicates whether some other object is "equal to" this one.
	**************************************************************************/
	equals = function(obj)
	{ 														/* Method equals */
		return (HashCode == obj.hashCode());
	}; 														/* Method equals */
	
	/**************************************************************************
	* Module: Method hashCode
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 04/25/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: HashCode.
	* 
	* Description: Returns a hash code value for the object.
	**************************************************************************/
	hashCode = function()
	{ 													  /* Method hashCode */
		return (HashCode);
	}; 													  /* Method hashCode */

	init();
	
	return ({
		equals: equals,
		hashCode: hashCode
	});
}; 															/* Class JSObect */

/******************************************************************************
* Module: Class Modifier
*     
* Created: 04/25/10
* 
* Last Modified: 05/08/10
*                
* Package: JS.lang.reflect
*
* Extends: None.
*
* Events: None.
*
* Local Objects: None.
* 
* Methods: isPrivate(), isProtected(), isPublic(), isStatic().
*
* Description:  The Modifier class provides methods to decode class and member 
* 				access modifiers.
******************************************************************************/
JS.lang.reflect.Modifier = function(ModifierObj)
{ 														   /* Class Modifier */
	/* Methods */
	var isPrivate;
	var isProtected;
	var isPublic;
	var isStatic;
	
	/**************************************************************************
	* Module: Method isPrivate
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 04/16/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Boolean.
	* 
	* Description: Returns whether this element is private.
	**************************************************************************/
	isPrivate = function()
	{ 													 /* Method isPrivate */
		return (ModifierObj.isPrivate);	
	}; 													 /* Method isPrivate */
	
	/**************************************************************************
	* Module: Method isProtected
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 04/16/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Boolean.
	* 
	* Description: Returns whether this element is protected.
	**************************************************************************/
	isProtected = function()
	{	 											   /* Method isProtected */
		return (ModifierObj.isProtected);
	}; 												   /* Method isProtected */
	
	/**************************************************************************
	* Module: Method isPublic
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 04/16/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Boolean.
	* 
	* Description: Returns whether this element is public.
	**************************************************************************/
	isPublic = function()
	{ 													  /* Method isPublic */
		return (ModifierObj.isPublic);
	};	 												  /* Method isPublic */
	
	/**************************************************************************
	* Module: Method isStatic
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 04/16/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Boolean.
	* 
	* Description: Returns whether this element is static.
	**************************************************************************/
	isStatic = function()
	{ 													  /* Method idStatic */
		return (ModifierObj.isStatic);
	}; 													  /* Method isStatic */

	return ({
		isPrivate:isPrivate,
		isProtected:isProtected,
		isPublic:isPublic,
		isStatic:isStatic
	});	
}; 														   /* Class Modifier */
JS.lang.reflect.Modifier.PUBLIC = 1;
JS.lang.reflect.Modifier.PRIVATE = 2;
JS.lang.reflect.Modifier.PROTECTED = 3;
JS.lang.reflect.Modifier.STATIC = 4;

/******************************************************************************
* Module: Class Field
*     
* Created: 06/08/13
* 
* Last Modified: 06/08/13
*                
* Package: JS.lang.reflect
*
* Extends: None.
*
* Events: None.
*
* Local Objects: DefaultValue, Modifier, Name, Private, Public, Static.
* 
* Methods: getDefaultValue(), getModifier(), getName().
*
* Description: This represents an object field.
******************************************************************************/
JS.lang.reflect.Field = function(FieldObj)
{ 															  /* Class Field */
	/* Fields */
	var DefaultValue;
	var Modifier;
	var Name;
	var Private;
	var Public;
	var Static;

	/* Methods */
	var init;
	var getDefaultValue;
	var getModifier;
	var getName;
	
	/**************************************************************************
	* Module: Constructor Field
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: FieldObj.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: None.
	* 
	* Description: Returns the methods of this class.
	**************************************************************************/
	init = function(FieldObj)
	{
		if (!FieldObj.name)
		{
			throw "Syntax Error: No Field Name Specified";
		}	
		Name = FieldObj.name;
		DefaultValue = FieldObj.defaultValue;
		
		if (FieldObj.access)
		{
			Public = FieldObj.access == JS.lang.reflect.Modifier.PUBLIC ? true : false;
			Private = FieldObj.access == JS.lang.reflect.Modifier.PRIVATE ? true : false;
			Static = FieldObj.access == JS.lang.reflect.Modifier.STATIC ? true : false;
		}
		else
		{
			Public = false;
			Private = true;
			Static = false;
		}
	
		Modifier = new JS.lang.reflect.Modifier({
			isPrivate: Private,
			isPublic: Public,
			isStatic: Static
		});
	}; 													/* Constructor Field */

	/* Method Definitions */
	/**************************************************************************
	* Module: Method getDefaultValue
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Methods.
	* 
	* Description: Returns the default value of this field.
	**************************************************************************/
	getDefaultValue = function()
	{ 											   /* Method getDefaultValue */
		return (DefaultValue);
	}; 											   /* Method getDefaultValue */
	
	/**************************************************************************
	* Module: Method getModifier
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 04/16/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Modifier.
	* 
	* Description: Returns the modifier for this field.
	**************************************************************************/
	getModifier = function()
	{ 												   /* Method getModifier */
		return (Modifier);
	}; 												   /* Method getModifier */
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Name.
	* 
	* Description: Returns the name of this field.
	**************************************************************************/
	getName = function() 
	{ 													   /* Method getName */
		return (Name);	
	}; 													   /* Method getName */

	init(FieldObj);
	
	return ({
		getDefaultValue:getDefaultValue,
		getModifier:getModifier,
		getName:getName
	});
}; 															  /* Class Field */

/******************************************************************************
* Module: Class Method
*     
* Created: 06/08/13
* 
* Last Modified: 06/08/13
*                
* Package: JS.lang.reflect
*
* Extends: None.
*
* Events: None.
*
* Local Objects: Code, Modifier, Name, Params, Private, Public, Static.
* 
* Methods: getCode(), getModifier(), getName(), getParameters().
*
* Description: This represents an object method.
******************************************************************************/
JS.lang.reflect.Method = function(MethodObj)
{ 															 /* Class Method */
	/* Fields */
	var Code;
	var Modifier;
	var Name;
	var Params;
	var Private;
	var Public;
	var Static;
	
	/* Methods */
	var init;
	var getCode;
	var getModifier;
	var getName;
	var getParameters;
	
	/**************************************************************************
	* Module: Constructor Method
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: MethodObj.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: None.
	* 
	* Description: Initializes the Method class.
	**************************************************************************/
	init = function(MethodObj)
	{ 												   /* Constructor Method */
		if (!MethodObj.name) 
		{
			throw "Syntax Error: No Method Name Specified";
		}		
		Name = MethodObj.name;
		
		if (MethodObj.access) 
		{
			Public = MethodObj.access == JS.lang.reflect.Modifier.PUBLIC ? true : false;
			Private = MethodObj.access == JS.lang.reflect.Modifier.PRIVATE ? true : false;
			Static = MethodObj.access == JS.lang.reflect.Modifier.STATIC ? true : false;
		}
		else 
		{
			/* Constructors Are Private By Default */
			if (MethodObj.name == "init")
			{
				Public = false;
				Private = true;
				Static = false;
			}
			else
			{				
				Public = true;
				Private = false;
				Static = false;
			}
		}
		
		Modifier = new JS.lang.reflect.Modifier({
			isPrivate: Private,
			isPublic: Public,
			isStatic: Static
		});
		
		Code = "";
		Params = (MethodObj.params) ? MethodObj.params : [];
		
		if (MethodObj.code) 
		{
			Code = "\"" + MethodObj.code + "\"";
			Code = Code.substr(Code.indexOf("{") + 1);
			Code = Code.substr(0, Code.lastIndexOf("}"));
		}
	}; 												   /* Constructor Method */
	
	/* Method Definitions */
	/**************************************************************************
	* Module: Method getCode
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Code.
	* 
	* Description: Returns the code associated with this method.
	**************************************************************************/
	getCode = function() 
	{ 													   /* Method getCode */
		return (Code);
	}; 													   /* Method getCode */
	
	/**************************************************************************
	* Module: Method getModifier
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 04/16/10
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Modifier.
	* 
	* Description: Returns the modifier for this method.
	**************************************************************************/
	getModifier = function()
	{ 												   /* Method getModifier */
		return (Modifier);
	}; 												   /* Method getModifier */
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Name.
	* 
	* Description: Returns the name of this method.
	**************************************************************************/
	getName = function() 
	{ 													   /* Method getName */
		return (Name);	
	}; 													   /* Method getName */

	/**************************************************************************
	* Module: Method getParameters
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Params.
	* 
	* Description: Returns the parameters of this method.
	**************************************************************************/
	getParameters = function() 
	{ 												 /* Method getParameters */
		return (Params);
	}; 												 /* Method getParameters */

	init(MethodObj);
	
	return ({
		getCode:getCode,
		getModifier:getModifier,
		getName:getName,
		getParameters:getParameters
	});
}; 															 /* Class Method */

/******************************************************************************
* Module: Class Class
*     
* Created: 06/08/13
* 
* Last Modified: 06/08/13
*                
* Package: JS.lang.
*
* Extends: None.
*
* Events: None.
*
* Local Objects: Fields, Methods, Name, SuperClass.
* 
* Methods: getConstructor(), getFields(), getMethod(), getMethods(), getName(), 
* 		   getSuperClass().
*
* Description: The abstract representation of an object-oriented class.
******************************************************************************/
JS.lang.Class = function(ClassObj)
{
	/* Fields */
	var Fields;
	var Methods;
	var Name;
	var SuperClass;
			
	/* Methods */
	var init;
	var getConstructor;
	var getFields;
	var getMethod;
	var getMethods;
	var getName;
	var getSuperClass;
			
	/**************************************************************************
	* Module: Constructor Class
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: i.
	* 
	* Methods Called: None.
	*
	* Returned Value: None.
	* 
	* Description: Initializes the Class class.
	**************************************************************************/
	init = function()
	{ 													/* Constructor Class */
		var i;
		
		Fields = [];
		Methods = [];
		
		if (!ClassObj.name)
		{
			throw "Syntax Error: No Class Name Specified";
		}
		Name = ClassObj.name;

		if (ClassObj.fields)
		{
			for (i = 0; i < ClassObj.fields.length; i++)
			{
				if (!(ClassObj.fields[i] instanceof JS.lang.reflect.Field))
				{
					Fields[Fields.length] = new JS.lang.reflect.Field(ClassObj.fields[i]);
				}
				else
				{
					Fields[Fields.length] = ClassObj.fields[i];
				}
			}
		}		

		if (ClassObj.methods)
		{
			for (i = 0; i < ClassObj.methods.length; i++)
			{
				if (!(ClassObj.methods[i] instanceof JS.lang.reflect.Method))
				{
					Methods[Methods.length] = new JS.lang.reflect.Method(ClassObj.methods[i]);
				}				
				else
				{
					Methods[Methods.length] = ClassObj.methods[i];
				}
			}
		}
		
		Methods[Methods.length] = new JS.lang.reflect.Method({
			name: "getClass",
			code: function() {
				return (new JS.lang.Class(ClassObj));
			}
		});

		if (ClassObj.inherits)
		{
			SuperClass = ClassObj.inherits;
		}
		else
		{
			SuperClass = JS.lang.JSObject;
		}
	}; 													/* Constructor Class */


	/**************************************************************************
	* Module: Method getConstructor
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: getMethod().
	*
	* Returned Value: JS.lang.reflect.Method.
	* 
	* Description: Returns the constructor of this class.
	**************************************************************************/
	getConstructor = function()
	{	 											/* Method getConstructor */
		return(getMethod("init"));
	}; 												/* Method getConstructor */
	
	/**************************************************************************
	* Module: Method getFields
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Fields.
	* 
	* Description: Returns the fields of this class.
	**************************************************************************/
	getFields = function()
	{ 													 /* Method getFields */
		return (Fields);
	}; 													 /* Method getFields */
	
	/**************************************************************************
	* Module: Method getMethod
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: MethodName.
	* 
	* Local Objects: i.
	* 
	* Methods Called: Method.getName().
	*
	* Returned Value: JS.lang.reflect.Method.
	* 
	* Description: Returns a method with a specified name.
	**************************************************************************/
	getMethod = function(MethodName)
	{ 													 /* Method getMethod */
		var i;
		
		for (i = 0; i < Methods.length; i++)
		{
			if (Methods[i].getName() == MethodName)
			{
				return (Methods[i]);
			}	
		}		
		return (null);
	}; 													 /* Method getMethod */

	/**************************************************************************
	* Module: Method getMethods
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Methods.
	* 
	* Description: Returns the methods of this class.
	**************************************************************************/
	getMethods = function()
	{ 													/* Method getMethods */
		return (Methods);	
	}; 													/* Method getMethods */
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: Name.
	* 
	* Description: Returns the name of this class.
	**************************************************************************/
	getName = function()
	{ 													   /* Method getName */
		return (Name);
	}; 													   /* Method getName */
	
	/**************************************************************************
	* Module: Method getSuperClass
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: SuperClass.
	* 
	* Description: Returns the parent class of this class.
	**************************************************************************/
	getSuperClass = function()
	{ 												 /* Method getSuperClass */
		return (SuperClass);
	}; 												 /* Method getSuperClass */

	init();

	return ({
		getConstructor: getConstructor,
		getFields: getFields,
		getMethod:getMethod,
		getMethods:getMethods,
		getName:getName,
		getSuperClass:getSuperClass
	});
};

/******************************************************************************
* Module: Class ClassFactory
*     
* Created: 06/08/13
* 
* Last Modified: 06/08/13
*                
* Package: JS.lang.
*
* Extends: None.
*
* Events: None.
*
* Local Objects: Nones.
* 
* Methods: createClass().
*
* Description: The class factory will create a JavaScript class.
******************************************************************************/
JS.lang.ClassFactory = function()
{ 													   /* Class ClassFactory */
	var createClass;
	
	/**************************************************************************
	* Module: Method createClass
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 06/08/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: ClassString, Constructor, DefaultValue, FieldName, Fields,
	* 				 HashedConstParams, i, j, MethodName, Methods, NewClass, 
	* 				 Params, PublicElementCount.
	* 
	* Methods Called: Class.getConstructor(), Class.getName(), 
	* 				  Method.getParameters(), Class.getFields(), 
	* 				  Class.getMethods(), Field.getModifier(), 
	* 				  Modifier.isStatic(), Field.getName(), 
	* 				  Field.getDefaultValue(), Method.getModifier(), 
	* 				  Method.getName(), Method.getParameters(), 
	* 				  Method.getCode(), Class.getSuperClass(), 
	* 				  Modifier.isPublic().
	*
	* Returned Value: None.
	* 
	* Description: Creates a JavaScript class.
	**************************************************************************/
	createClass = function()
	{ 												   /* Method createClass */
		var ClassString;
		var Constructor;
		var DefaultValue;
		var FieldName;
		var Fields;
		var HashedConstParams;
		var i;
		var j;
		var MethodName;
		var Methods;
		var NewClass;
		var Params;
		var PublicElementCount;
								
		NewClass = new JS.lang.Class(ClassObj);
		
		Constructor = NewClass.getConstructor();
		ClassString = NewClass.getName() + "=function(";
		if (Constructor) 
		{
			Params = Constructor.getParameters();
			HashedConstParams = [];

			for (i = 0; i < Params.length; i++)
			{
				HashString = "";
				for (j = 0; j < 16; j++)
				{
					HashString = HashString + String.fromCharCode((Math.floor(Math.random() * 26) + 97));
				}
				HashedConstParams[i] = HashString;
			}
			if (Params.length > 0)
			{
				ClassString += HashedConstParams[0];
			}
			
			for (j = 1; j < Params.length; j++)
			{
				ClassString += ", " + HashedConstParams[j];
			}
		}
		ClassString += ")\n{\n";

		Fields = NewClass.getFields();
		Methods = NewClass.getMethods();

		/* Declare Fields & Methods */
		for (i = 0; i < Fields.length; i++)
		{
			if (!(Fields[i].getModifier().isStatic())) 
			{
				ClassString += "\tvar " + Fields[i].getName();
				DefaultValue = Fields[i].getDefaultValue();
				if (DefaultValue)
				{
					ClassString += "=" + DefaultValue;
				}
				ClassString += ";\n";
			}
		}

		ClassString += "\tvar super;\n";
		
		for (i = 0; i < Methods.length; i++) 
		{
			if (!(Methods[i].getModifier().isStatic()))
			{
				ClassString += "\tvar " + Methods[i].getName() + ";\n";				
			}
		}
		
		/* Define Methods */
		for (i = 0; i < Methods.length; i++) 
		{
			if (!(Methods[i].getModifier().isStatic())) 
			{
				ClassString += "\t" + Methods[i].getName() + "=function(";
				
				Params = Methods[i].getParameters();
				if (Params.length > 0) 
				{
					ClassString += Params[0];
				}
				
				for (j = 1; j < Params.length; j++) 
				{
					ClassString += ", " + Params[j];
				}
				ClassString += ")\n\t{\n";
				ClassString += "\t\t" + Methods[i].getCode() + "\n";
				ClassString += "\t};\n";
			}
		}
		
		if (NewClass.getSuperClass() != JS.lang.Object)
		{
			ClassString += "\tsuper=new " + NewClass.getSuperClass().getName() + "();\n";
		}	
		else
		{
			ClassString += "\tsuper=new JS.lang.Object();\n";
		}
		ClassString += "\tfor (var i in super)\n\t\tif (!this[i])\n\t{\n\t\t\tthis[i]=super[i];\n\t}\n"

		if (Constructor)
		{
			Params = Constructor.getParameters();
			ClassString += "\tinit(";
			if (Params.length > 0)
			{
				ClassString += HashedConstParams[0];
			}
			
			for (j = 1; j < Params.length; j++)
			{
				ClassString += ", " + HashedConstParams[j];
			}
			ClassString += ");\n";
		}

		/* Expose Public Methods & Fields */
		ClassString += "\tvar Instance={\n";
		PublicElementCount = 0;

		for (i = 0; i < Fields.length; i++) 
		{
			if (Fields[i].getModifier().isPublic())
			{
				FieldName = Fields[i].getName();
				ClassString += "\t\t";
				if (PublicElementCount > 0)
				{
					ClassString += ",";
				}
				ClassString += FieldName + ":" + FieldName + "\n";
				PublicElementCount++;
			}
		}			

		for (i = 0; i < Methods.length; i++) 
		{
			if (Methods[i].getModifier().isPublic())
			{
				MethodName = Methods[i].getName();
				ClassString += "\t\t";
				if (PublicElementCount > 0)
				{
					ClassString += ",";
				}
				ClassString += MethodName + ":" + MethodName + "\n";
				PublicElementCount++;
			}
		}			

		ClassString += "\t};\n";

		/* Expose Inherited Members */
		ClassString += "for (var i in super)\n\t\tif (this[i])\n\t{Instance[i] = this[i];}\n"
		ClassString += "return (Instance);";
		ClassString += " };\n";
		
		/* Declare Static Fields & Methods */
		for (i = 0; i < Fields.length; i++)
		{
			if (Fields[i].getModifier().isStatic()) 
			{
				ClassString += NewClass.getName() + "." + Fields[i].getName();
				DefaultValue = Fields[i].getDefaultValue();
				if (DefaultValue)
				{
					ClassString += "=" + DefaultValue;
				}
				else
				{
					ClassString += "=null";					
				}
				ClassString += ";\n";
			}
		}

		for (i = 0; i < Methods.length; i++) 
		{
			if (Methods[i].getModifier().isStatic()) 
			{
				ClassString += NewClass.getName() + "." + Methods[i].getName() + "=function(";
				
				Params = Methods[i].getParameters();
				if (Params.length > 0) 
				{
					ClassString += Params[0];
				}
				
				for (j = 1; j < Params.length; j++) 
				{
					ClassString += ", " + Params[j];
				}
				ClassString += ")\n\t{\n";
				ClassString += "\t\t" + Methods[i].getCode() + "\n";
				ClassString += "\t};\n";
			}
		}
		
//		alert(ClassString);
		eval(ClassString);
	}; 												   /* Method createClass */
	
	return ({
		createClass:createClass	
	});
}; 													   /* Class ClassFactory */

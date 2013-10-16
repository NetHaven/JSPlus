/* JS+ Version 1.1
 Copyright 2013
 This Code is Licensed Under the AGPL(http://www.gnu.org/licenses/agpl.html)

 * */

var JS = {};
JS.graphics = {};
JS.lang = {};
JS.lang.reflect = {};

/******************************************************************************
* Module: Class JSObject
*     
* Created: 04/25/10
* 
* Last Modified: 08/26/13
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
	* Last Modified: 08/26/13
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
		return (HashCode === obj.hashCode());
	}; 														/* Method equals */
	
	/**************************************************************************
	* Module: Method hashCode
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 08/26/13
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
		return HashCode;
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
* Last Modified: 08/26/13
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
	* Last Modified: 08/26/13
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
	{ 													/* Constructor Field */
		if (!FieldObj.name)
		{
			throw "Syntax Error: No Field Name Specified";
		}	
		Name = FieldObj.name;
		DefaultValue = FieldObj.defaultValue;
		
		if (FieldObj.access)
		{
			Public = FieldObj.access === JS.lang.reflect.Modifier.PUBLIC ? true : false;
			Private = FieldObj.access === JS.lang.reflect.Modifier.PRIVATE ? true : false;
			Static = FieldObj.access === JS.lang.reflect.Modifier.STATIC ? true : false;
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

	/**************************************************************************
	* Module: Method getDefaultValue
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return DefaultValue;
	}; 											   /* Method getDefaultValue */
	
	/**************************************************************************
	* Module: Method getModifier
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 08/26/13
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
		return Modifier;
	}; 												   /* Method getModifier */
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return Name;	
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
* Last Modified: 08/26/13
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
	* Last Modified: 08/26/13
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
			Public = MethodObj.access === JS.lang.reflect.Modifier.PUBLIC ? true : false;
			Private = MethodObj.access === JS.lang.reflect.Modifier.PRIVATE ? true : false;
			Static = MethodObj.access === JS.lang.reflect.Modifier.STATIC ? true : false;
		}
		else 
		{
			/* Constructors Are Private By Default */
			if (MethodObj.name === "init")
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
	* Last Modified: 08/26/13
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
		return Code;
	}; 													   /* Method getCode */
	
	/**************************************************************************
	* Module: Method getModifier
	*     
	* Created: 04/16/10
	* 
	* Last Modified: 08/26/13
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
		return Modifier;
	}; 												   /* Method getModifier */
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return Name;
	}; 													   /* Method getName */

	/**************************************************************************
	* Module: Method getParameters
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return Params;
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
* Last Modified: 08/26/13
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
	* Last Modified: 08/26/13
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
		return Fields;
	}; 													 /* Method getFields */
	
	/**************************************************************************
	* Module: Method getMethod
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
			if (Methods[i].getName() === MethodName)
			{
				return (Methods[i]);
			}	
		}		
		return null;
	}; 													 /* Method getMethod */

	/**************************************************************************
	* Module: Method getMethods
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return Methods;	
	}; 													/* Method getMethods */
	
	/**************************************************************************
	* Module: Method getName
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return Name;
	}; 													   /* Method getName */
	
	/**************************************************************************
	* Module: Method getSuperClass
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
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
		return SuperClass;
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
* Last Modified: 08/25/13
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
JS.lang.ClassFactory = (function()
{ 													   /* Class ClassFactory */
	var createClass;
	
	/**************************************************************************
	* Module: Method createClass
	*     
	* Created: 06/08/13
	* 
	* Last Modified: 08/26/13
	*                
	* Passed Parameters: ClassObj.
	* 
	* Local Objects: ClassName, ClassPath, ClassString, Constructor, 
	* 				 DefaultValue, FieldName, Fields, HashedConstParams, 
	* 				 HashString, i, j, MethodName, Methods, NewClass, Params, 
	* 				 PublicElementCount.
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
	createClass = function(ClassObj)
	{ 												   /* Method createClass */
		var ClassName;
		var ClassPath;
		var ClassString;
		var Constructor;
		var DefaultValue;
		var FieldName;
		var Fields;
		var HashedConstParams;
		var HashString;
		var i;
		var j;
		var MethodName;
		var Methods;
		var NewClass;
		var Params;
		var PublicElementCount;
								
		NewClass = new JS.lang.Class(ClassObj);
		ClassName = NewClass.getName();
		
		Constructor = NewClass.getConstructor();
		if (ClassObj.pkg)
		{
			ClassPath = ClassObj.pkg + "." + ClassName;
		}
		else
		{
			ClassPath = ClassName;
		}
		ClassString = ClassPath + "=function(";

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

		ClassString += "\tvar SuperClass;\n";
		
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
		
		if (NewClass.getSuperClass() !== JS.lang.JSObject)
		{
			ClassString += "\tSuperClass=new " + NewClass.getSuperClass() + "();\n";
		}	
		else
		{
			ClassString += "\tSuperClass=new JS.lang.JSObject();\n";
		}
		ClassString += "\tfor (var i in SuperClass)\n\t\tif (!this[i])\n\t{\n\t\t\tthis[i]=SuperClass[i];\n\t}\n"

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
		ClassString += "for (var i in SuperClass)\n\t\tif (this[i])\n\t{Instance[i] = this[i];}\n";
		ClassString += "return (Instance);";
		ClassString += " };\n";
		
		/* Declare Static Fields & Methods */
		for (i = 0; i < Fields.length; i++)
		{
			if (Fields[i].getModifier().isStatic()) 
			{
				ClassString += ClassPath + "." + Fields[i].getName();
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
				ClassString += ClassPath + "." + Methods[i].getName() + "=function(";
				
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
		
		eval(ClassString);
	}; 												   /* Method createClass */
	
	return ({
		createClass:createClass	
	});
}()); 												   /* Class ClassFactory */

/******************************************************************************
* Module: Class Dimension
*     
* Created: 05/08/10
* 
* Last Modified: 08/26/13
*                
* Package: JS.graphics
*
* Extends: None.
*
* Events: None.
*
* Local Objects: height, width.
* 
* Methods: getHeight(), getWidth(), setHeight(), setSize(), setWidth().
*
* Description: The Dimension class encapsulates the width and height of an 
* 			   object.
******************************************************************************/
JS.graphics.Dimension = function()
{ 														  /* Class Dimension */
	/* Fields */
	var height = 0;
	var width = 0;
	
	/* Methods */
	var getHeight;
	var getWidth;
	var setHeight;
	var setSize;
	var setWidth;
	
	/**************************************************************************
	* Module: Method getHeight
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/26/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: height.
	* 
	* Description: Returns the height of this Dimension object.
	**************************************************************************/
	getHeight = function()
	{ 													 /* Method setHeight */
		return height;
	}; 													 /* Method setHeight */
	
	/**************************************************************************
	* Module: Method getWidth
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/26/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: width.
	* 
	* Description: Returns the width of this Dimension object.
	**************************************************************************/
	getWidth = function()
	{ 													  /* Method getWidth */
		return width;
	}; 													  /* Method getWidth */
	
	/**************************************************************************
	* Module: Method setHeight
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 05/08/10
	*                
	* Passed Parameters: value.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Sets the height of this Dimension object.
	**************************************************************************/
	setHeight = function(value)
	{ 													 /* Method setHeight */
		height = value;
	}; 													 /* Method setHeight */
	
	/**************************************************************************
	* Module: Method setSize
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/18/13
	*                
	* Passed Parameters: w, h.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Sets the height and width of this Dimension object.
	**************************************************************************/
	setSize = function(w, h)
	{ 													   /* Method setSize */
		width = w;
		height = h;
	};													   /* Method setSize */
	
	/**************************************************************************
	* Module: Method setWidth
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 05/08/10
	*                
	* Passed Parameters: value.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Sets the width of this Dimension object.
	**************************************************************************/
	setWidth = function(value)
	{ 													  /* Method setWidth */
		width = value;
	}; 													  /* Method setWidth */
	
	return ({
		getHeight:getHeight,
		getWidth:getWidth,
		setHeight:setHeight(),
		setSize:setSize(),
		setWidth:setWidth()
	});
}; 														  /* Class Dimension */

/******************************************************************************
* Module: Class Point
*     
* Created: 05/08/10
* 
* Last Modified: 08/18/13
*                
* Package: JS.graphics
*
* Extends: None.
*
* Events: None.
*
* Local Objects: x, y.
* 
* Methods: getX(), getY(), setLocation(), setX(), setY().
*
* Description: The Point class encapsulates the x and y coordinate of a 
* 			   component in a single object.
******************************************************************************/
JS.graphics.Point = function()
{ 															  /* Class Point */
	/* Fields */
	var x = 0;
	var y = 0;

	/* Methods */
	var getX;
	var getY;
	var setLocation;
	var setX;
	var setY;
	
	/**************************************************************************
	* Module: Method getX
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/18/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: x.
	* 
	* Description: Returns the x coordinate of this point.
	**************************************************************************/
	getX = function()
	{ 														  /* Method getX */
		return x;
	}; 														  /* Method getX */
	
	/**************************************************************************
	* Module: Method getY
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/18/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: x.
	* 
	* Description: Returns the y coordinate of this point.
	**************************************************************************/
	getY = function()
	{ 														  /* Method getY */
		return y;
	}; 														  /* Method getY */
	
	/**************************************************************************
	* Module: Method setLocation
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/18/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: A convenience method for setting both the x and y coordinate
	* 		       of this Point object simultaneously.
	**************************************************************************/
	setLocation = function(newX, newY)
	{ 												   /* Method setLocation */
		x = newX;
		y = newY;	
	}; 												   /* Method setLocation */
	
	/**************************************************************************
	* Module: Method setX
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/18/13
	*                
	* Passed Parameters: value.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Sets the x coordinate of this point.
	**************************************************************************/
	setX = function(value)
	{ 														  /* Method setX */
		x = value;
	}; 														  /* Method setX */
	
	/**************************************************************************
	* Module: Method setY
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 08/18/13
	*                
	* Passed Parameters: value.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Sets the y coordinate of this point.
	**************************************************************************/
	setY = function(value)
	{ 														  /* Method setY */
		y = value;
	}; 														  /* Method setY */
	
	return ({
		getX:getX,
		getY:getY,
		setLocation:setLocation,
		setX:setX,
		setY:setY
	});
}; 															  /* Class Point */

JS.lang.Exception = function(Msg)
{ 														  /* Class Exception */
	/* Fields */
	var Message;
	
	/* Methods */
	var init;
	var getMessage;

	/**************************************************************************
	* Module: Constructor Exception
	*     
	* Created: 05/01/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: Msg.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Initializes the Exception class.
	**************************************************************************/
	init = function(Msg)
	{ 												/* Constructor Exception */
		Message = Msg;
	}; 												/* Constructor Exception */
	
	/**************************************************************************
	* Module: Method getMessage
	*     
	* Created: 05/01/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: Msg.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None. 
	*
	* Returned Value: None.
	* 
	* Description: Returns the message associated with this exception.
	**************************************************************************/
	getMessage = function()
	{ 													/* Method getMessage */
		return Message;
	}; 													/* Method getMessage */
	
	init(Msg);
	
	return ({
		getMessage:getMessage
	});
}; 														  /* Class Exception */

/******************************************************************************
* Module: Class System
*     
* Created: 04/25/10
* 
* Last Modified: 06/28/13
*                
* Package: JS.lang
*
* Extends: None.
*
* Passed Parameters: None.
* 
* Events: None.
*
* Local Objects: None.
* 
* Methods: getBrowser(), getBrowserVersion(), getOS(), getScreenResolution(),
* 		   getVersion().
*
* Description: The System class contains several useful methods that obtain
* 			   system specific information. It cannot be instantiated.
******************************************************************************/
JS.lang.System = (function()
{ 															 /* Class System */
	/* Methods */
	var getBrowser;
	var getBrowserVersion;
	var getOS;
	var getScreenResolution;
	var getVersion;
	
	/**************************************************************************
	* Module: Method getBrowser
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: navigator.appName.
	* 
	* Description: Returns the name of the user's browser.
	**************************************************************************/
	getBrowser = function()
	{ 													/* Method getBrowser */
		return navigator.appName;		
	};													/* Method getBrowser */
	
	/**************************************************************************
	* Module: Method getBrowserVersion
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: navigator.appVersion.
	* 
	* Description: Returns the version of the user's browser.
	**************************************************************************/
	getBrowserVersion = function()
	{ 											 /* Method getBrowserVersion */
		return navigator.appVersion;		
	}; 											 /* Method getBrowserVersion */
	
	/**************************************************************************
	* Module: Method getOS
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: navigator.platform.
	* 
	* Description: Returns the user's operating system.
	**************************************************************************/
	getOS = function()
	{ 														 /* Method getOS */
		return navigator.platform;
	}; 														 /* Method getOS */
	
	/**************************************************************************
	* Module: Method getScreenResolution
	*     
	* Created: 05/08/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: ScreenRes.
	* 
	* Methods Called: Dimension.setSize().
	*
	* Returned Value: ScreenRes
	* 
	* Description: Returns the resolution of the user's screen as a dimension.
	**************************************************************************/
	getScreenResolution = function()
	{ 										   /* Method getScreenResolution */
		var ScreenRes;
		
		ScreenRes = new JS.graphics.Dimension();
		ScreenRes.setSize(screen.width, screen.height);
		return ScreenRes;		
	}; 										   /* Method getScreenResolution */
	
	/**************************************************************************
	* Module: Method getVersion
	*     
	* Created: 04/25/10
	* 
	* Last Modified: 06/28/13
	*                
	* Passed Parameters: None.
	* 
	* Local Objects: None.
	* 
	* Methods Called: None.
	*
	* Returned Value: The version of JS+.
	* 
	* Description: Returns the current version of JS+.
	**************************************************************************/
	getVersion = function()
	{ 													/* Method getVersion */
		return "1.1";
	}; 													/* Method getVersion */
	
	return ({
		getBrowser:getBrowser,
		getBrowserVersion:getBrowserVersion,
		getOS:getOS,
		getScreenResolution:getScreenResolution,
		getVersion:getVersion
	});
}());	 													 /* Class System */

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
* Local Objects: None.
* 
* Methods: None.
*
* Description: This class represents a method.
******************************************************************************/
JS.Method = function(MethodObj)
{ 															 /* Class Method */
	if (!MethodObj.name)
	{
		throw "Syntax Error: No Method Name Specified";
	}
}; 															 /* Class Method */

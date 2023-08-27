<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
Registration Page
<br>
<br>
<form>

<label> Firstname </label>
<input type="text" name="firstname" size="15"/> <br> <br>
<label> Middlename: </label>
<input type="text" name="middlename" size="15"/> <br> <br>
<label> Lastname: </label>
<input type="text" name="lastname" size="15"/> <br> <br>

<label> 
Course :
</label> 
<select>
<option value="Course">Course</option>
<option value="BCA">BCA</option>
<option value="BBA">BBA</option>
<option value="B.Tech">B.Tech</option>
<option value="MBA">MBA</option>
<option value="MCA">MCA</option>
<option value="M.Tech">M.Tech</option>
</select>

<br>
<br>
<label> 
Gender :
</label><br>
<input type="radio" name="male"/> Male <br>
<input type="radio" name="female"/> Female <br>
<input type="radio" name="other"/> Other
<br>
<br>

<label> 
Phone :
</label>
<input type="text" name="country code"  value="+91" size="2"/> 
<input type="text" name="phone" size="10"/> <br> <br>
Address
<br>
<textarea cols="80" rows="5" value="address"></textarea><br>
<input type="submit" value="submit">
</form>
</body>
</html>
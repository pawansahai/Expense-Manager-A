Expense-Manager-A
=================

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Ember Starter Kit</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
  <link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
</head>
<body>

  <script type="text/x-handlebars">
    <div class="navbar">
      <div class="navbar-inner">
        <a class="brand" href="#">Home</a>
        <ul class="nav">
          <li>{{#link-to 'posts'}}Create Group{{/link-to}}</li>
          <li>{{#link-to 'expenses'}}Enter Expenses{{/link-to}}</li>
          <li>{{#link-to 'expenses'}}Compute Payments{{/link-to}}</li>
        </ul>
      </div>
    </div>

    {{outlet}}
  </script>

  <script type="text/x-handlebars" id="posts">
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span3">
            <table class='table'>
            
            <tr><td>{{#link-to 'post' this class="create-btn"}} Add user {{/link-to}}</td><td>{{#link-to 'post' this class="delete-btn"}}Delete{{/link-to}}</td></td></tr>
            <tr style="alignment-adjust: central"><td style="width: 70px;">Person Name</td> <td td style="width: 70px;">Display Name</td><td td style="width: 100px;">Description</td><td>Edit</td></tr>
            {{#each model}}
            <tr style="alignment-adjust: central"><td td style="width: 70px;">
                    
                {{#link-to 'post' this}}{{person}}{{/link-to}}
            </td> <td td style="width: 70px;">
                    
                {{#link-to 'post' this}}{{display}}{{/link-to}}
            </td><td td style="width: 100px;">
                    
                {{#link-to 'post' this}}{{comment}}{{/link-to}}
            </td><td>{{#link-to 'post' this class="edit-btn"}}Edit user {{/link-to}}</td></tr>
           
    
            {{/each}}
          </table>
        </div>
        <div class="span9">
          {{outlet}}
        </div>
      </div>
    </div>
  </script>
  
  <script type="text/x-handlebars" id="expenses">
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span3>
        {{#each model}}
<form {{action "addexpenses" this on="submit"}}>
       
       
    <tr><td width="70px">Date</td><td>{{input type="date" value=date}}</td></tr>
   <tr><td width="70px">Description</td><td>{{input type="text" value=description}}</td></tr>
    <tr><td width="70px">Name</td><td>{{input type="text" value=name}}</td></tr>
   <tr><td width="70px">Amount</td><td>{{input type="text" value=amount}}</td></tr>
  
   
    <button {{action 'SaveExpenses'}}>Save</button>
</form>
   {{/each}}
        </div>
        <div class="span9">
          {{outlet}}
        </div>
      </div>
    </div>
  </script>
  <script type="text/x-handlebars" id="compute">
      <h1>Work In Progress
   </script>
 
  <script src="js/libs/jquery-1.9.1.js"></script>
  <script src="js/libs/handlebars-1.0.0.js"></script>
  <script src="js/libs/ember-1.0.0-rc.8.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min.js"></script>
  <script src="js/app.js"></script>

</body>
</html>


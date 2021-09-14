# SMART HOTEL SERVER
Chat Application Server Built on Express.js, RestAPI, MongoDb. 

### Documentation
<ul style="list-style-type:circle">
<li>This is a REST-API made purely using Node Js and Express.</li>
<li>The server url is in the format below for the RESTAPI:

```

```

</li>

</ul>

##Business Requirements
### Business Requirements
 <ul>
<li>Real time chatting using socket io</li>
<li>A resource model API</li>
<li>Use of JWT for authentication</li>
<li>Session logging</li>
<li>User Interaction logs</li>

</ul>


##Achieved Business Requirements
###Achieved Business Requirements
<ul>
<li> Integration of socket io to allow real time communication or chatting of customers. The customer select which Room to chat with after log in. After login all room are made vailable for the user to select one.</li>
<li> User are required to sign up. Due to the minimal version of the application. account verification has been left oiptional no need for a verified account</li>
<li> Ones the user log in a token is made vailable to them to allow them to be able to interact with the server.</li>
<li> Only logged in accounts will be allowed to chat on the server</li>
<li> The server logs all activity of the user on the database in the table called Logs and also using morgan thrid party service to logg user acctivities.</li>
<li> Seesion loggs of the user start and endtime are also saved in the db. In the table called User_Session. When a user logs in a termstamp is recorded as logged in when they log out the seesion of the user ends and the record is updated in the databse</li>
<li> User can only exist in one room at a time before selecting another</li>
<li> Message of user/customer are saved in the table schema called Messages, Users accounts are stored in the databse as Users</li>
<li> Rooms need to be availbe in the system during deployment. Because of that a database seeding script has been provided to be run only ones during deployment of server</li>
</ul>



##Installation
### Requirements


<ul>
<li>Node Js</li>
<li>A BROWSER</li>
<li>MONGO COMPASS GUI</li>
</ul>


You can run it locally(if you have the data collection in your machine)  and online:

##### Locally

######On Linux
```bash
$ git clone https://github.com/zaam-inc/smarthotelserver.git     #clone the git repo
$ cd smarthotelserver   #change directory 
$ npm install     #Install app dependencies
$ sudo service mongod start  #start mongo service
$ npm run start:dev     #run the app
```

######On Windows
```powershell
$ git clone https://github.com/zaam-inc/smarthotelserver.git     #clone the git repo                        
$ cd smarthotelserver   #change directory
$ npm install     #Install app dependencies
$ net start MongoDB  #start mongo service
$ npm run start:dev      #run the app
```



Click [here](https://smarthotel2server.herokuapp.com) for testing Graphql Server


Have Fun!

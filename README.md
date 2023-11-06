# JavaScript-Final-Project

MERN Stack

MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js.

MongoDB — document database
Express(.js) — Node.js web framework, a server-side web framework
React(.js) — a client-side JavaScript framework
Node(.js) — the premier JavaScript web serve
  
The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON.

Packages, Frameworks usw.
npx create-react-app my-app
npm i express			ein serverseitiges Webframework für Node.js.
npm i mongoose		Mongoose ist ein Objektmodellierungsframework für MongoDB in Node.js . Objekte mit einem typisierten Schema definieren können
npm i nodemon  		ermöglicht, Node.js-Anwendungen automatisch neu zu starten
npm i body-parser		Node.js body parsing middleware.
npm i axios 			Axios ist ein Promise-basierter HTTP-Client für node.js und den Browser. Mit HTTP-Methoden( get, post, put , delete)


Flussdiagram :
Backend
controllers   ↓               		Funktionen des Programms 
     todo-controllers.js       		Asynchronous Database Operation  async and await 
models         ↓                  		Datas zu steuern. Definieren eines Mongoose-Schemas
    todo.js		 	 	in controller wird aufgerufen		
routes           ↓ 	                 	Routes des Programms zu steuern. Mit der Klasse express. 
     todo-routes          		Router lassen sich modular einbindbare Routenhandler erstellen.
app.js				mongoose.connect verbindung mit DB	
				

Frontend\my-app													
src                 ↓ 
components↓
	Todo.js				JSX, axios.post, axios.get, useState, useEffect, inputvalue, dodo list
App.js				JSX  


Hooks : eine spezielle Funktion, mit der du dich in React-Funktionalitäten “einhaken” kannst.

    • useState:  
    • Das einzige Argument, dass der useState() Hook verwendet ist der initiale Zustand.

    • Sie gibt ein Tupel zurück: der aktuelle State und eine Funktion die, den aktuellen State aktualisieren kann. 

Z.B. const [todoName, setTodoName] = useState('')

    • useEffect:  Durch die Verwendung dieses Hooks teilen Sie React mit, dass Ihre Komponente nach dem Rendern etwas tun muss.


CORS(Cross-Origin Resource Sharing)  ist ein Mechanismus, der es ermöglicht, dass eine Web-Anwendung im Browser auf Ressourcen einer anderen Domain zugreifen kann.
Ohne CORS würde der Browser den Zugriff auf die Ressourcen einer anderen Domain blockieren, um Sicherheitsbedenken zu vermeiden.
CORS lockert die Richtlinie, sodass Ihr Browser auf die gewünschten Ressourcen zugreifen kann.

CORS wird über HTTP-Header gesteuert.
(‘Access-Control-Allow-Origin’, ‘*’); festzulegen welcher andere Host auf diesen zugreifen darf.
(‘Access-Control-Allow-Headers’, ‘*’);  Welche Header(data) dürfen verwendet werden?
(‘Access-Control-Allow-Methods’, ‘*’);  Welche HTTP-Request-Methoden sind erlaubt?
		

Postman ist eine Kollaborationsplattform für die API-Entwicklung,
Mit Postman können Nutzer APIs entwerfen, debuggen, testen, usw.


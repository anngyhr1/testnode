# testnode

GET /courses/ ->  para retornar todos os cursos

/login/auth -> gera um jwt que é usado para autenticar os endpoints, 

	POST /courses/add -> post para inserir um curso
	
		body: 
		{
			"name": "curso1",
			"idUsuario": 1
		}
		
		header
			x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im5hbWUiOiJjdXJzbzEiLCJpZFVzdWFyaW8iOjF9LCJpYXQiOjE1NTg0OTA3MTl9.qornd_sWFqYBrkOlbIFAKsPUmrUNeGqTtLYFmqrxhTY		
	
	GET /courses/findOne -> retorna um curso
		
		body:
		{
			"id": "sec2hyj4i"
		}
	
		header
			x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im5hbWUiOiJjdXJzbzEiLCJpZFVzdWFyaW8iOjF9LCJpYXQiOjE1NTg0OTA3MTl9.qornd_sWFqYBrkOlbIFAKsPUmrUNeGqTtLYFmqrxhTY

	
	PUT /courses/
	
		body:
		{
			"id":"sec2hyj4i",
			"name": "curso5",
			"idUsuario": 5
		}
		header
			x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im5hbWUiOiJjdXJzbzEiLCJpZFVzdWFyaW8iOjF9LCJpYXQiOjE1NTg0OTA3MTl9.qornd_sWFqYBrkOlbIFAKsPUmrUNeGqTtLYFmqrxhTY

	DELETE /courses/
	
		body:
		{
			"name": "curso4",
			"idUsuario": 4
		}
		header
			x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im5hbWUiOiJjdXJzbzEiLCJpZFVzdWFyaW8iOjF9LCJpYXQiOjE1NTg0OTA3MTl9.qornd_sWFqYBrkOlbIFAKsPUmrUNeGqTtLYFmqrxhTY
	




//app.get("/user")


export default {
	async fetch(request, env, ctx): Promise<Response> {

		console.log("body" + request.body);
		console.log(request.headers)
		console.log(request.method)
		if(request.method==="GET")
		{
			return Response.json({
				message:"Hello from HarshShukla if u see this means server is working"
			})
		}
		else{
			return Response.json({
				message:"You didnot sent get request"
			})
		}
	},
} satisfies ExportedHandler<Env>;

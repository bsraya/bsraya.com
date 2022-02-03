clean:
	@rm -rf ./node_modules
	@rm -rf ./.cache
	@rm -rf ./public

reset:
	@rm -rf ./.cache
	@rm -rf ./public
	
run: 
	@npm run dev
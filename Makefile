dev:
	cd frontend && yarn start

production:
	rm -rf ./deploy
	mkdir deploy
	cd frontend && yarn run build
	mv frontend/build deploy/static


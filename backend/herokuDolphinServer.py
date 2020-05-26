import json
from flask import Flask, request, render_template, Response
import os
from pprint import pprint as p



def setupFlaskServer(flaskApp):

	flaskApp.config['TEMPLATES_AUTO_RELOAD'] = True

	@flaskApp.route('/')
	def returnMainPage():
		return render_template('frontend/htmlTemplates/mainIndex.html')


	if __name__ == '__main__':
		
		flaskAppLoadProcess = ''
		flaskApp.run()
		

flaskApp = Flask(__name__, template_folder='../', static_folder='../frontend')
setupFlaskServer(flaskApp)
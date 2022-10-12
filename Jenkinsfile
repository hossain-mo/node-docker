pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                //sh 'npm install' 
                sh 'docker version' 
                sh 'docker-compose version' 
                sh 'docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build'
            }
        }
    }
}
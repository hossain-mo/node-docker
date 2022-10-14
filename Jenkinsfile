pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                //sh 'npm install' 
                sh 'docker-compose up -f docker-compose.yml -f docker-compose-prod.yml -d --build' 
            }
        }
    }
}
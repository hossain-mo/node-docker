pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build' 
                sh 'docker-compose version' 
            }
        }
    }
}
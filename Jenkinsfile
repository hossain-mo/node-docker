pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                //sh 'npm install' 
                sh 'docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build' 
            }
        }
    }
}
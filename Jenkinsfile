pipeline {
    agent { dockerfile true }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('test') { 
            steps {
                sh 'docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d' 
                sh 'npm start' 
            }
        }
    }
}
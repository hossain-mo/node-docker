pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build'
                sh 'npm install' 
                sh 'npm start' 
            }
        }
    }
}
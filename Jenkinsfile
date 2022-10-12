pipeline {
    agent {
        dockerfile true 
    }

    stages {
        stage('Build') { 
            steps {
                //sh 'npm install' 
                sh 'docker version' 
                sh 'docker-compose version' 
                sh 'docker-compose up -f docker-compose.yml -f docker-compose-prod.yml -d --build' 
            }
        }
    }
}
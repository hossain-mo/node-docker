pipeline {
    agent {
        dockerfile {
        filename 'docker-compose-prod.yml'
        } 
    }

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run lint' 
            }
        }
    }
}
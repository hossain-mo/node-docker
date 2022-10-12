pipeline {
    agent { dockerfile true }

    environment {
    NODE_ENV = 'production'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'docker version' 
            }
        }
    }
}
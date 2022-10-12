pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker version' 
            }
        }
    }
}
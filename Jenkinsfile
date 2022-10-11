pipeline {
    agent any
    stages {
        // stage('Build') { 
        //     steps {
        //         sh 'npm install' 
        //     }
        // }
        stage('test') { 
            steps ('DockerComposeBuilder'){
                sh 'docker version' 
            }
        }
    }
}
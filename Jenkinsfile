pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Running npm install...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy step - Replace this with actual deploy commands'
                // sh 'your-deploy-command-here'
            }
        }
    }
}


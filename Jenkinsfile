pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm install --no-audit --no-fund
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo rm -rf /usr/share/nginx/html/*
                    sudo cp -r dist/* /usr/share/nginx/html/
                    sudo systemctl restart nginx
                '''
            }
        }

    }

    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
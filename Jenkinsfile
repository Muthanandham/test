pipeline {
  agent any

  environment {
    NG_CLI_ANALYTICS = "false"
  }

  stages {
    stage('Checkout Code') {
      steps {
        echo '🔄 Cloning repo...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing npm dependencies...'
        sh 'npm install --legacy-peer-deps'
      }
    }

    stage('Build App') {
      steps {
        echo '⚙️ Building Angular app...'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Deploying app to /var/www/my-app...'
        sh '''
          sudo rm -rf /var/www/my-app/*
          sudo cp -r dist/my-angular/browser* /var/www/my-app
          sudo nginx -t
          sudo systemctl restart nginx

        '''
      }
    }
  }

  post {
    success {
      echo '✅ Build and deployment successful!'
    }
    failure {
      echo '❌ Something went wrong in the pipeline!'
    }
  }
}

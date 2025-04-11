pipeline {
  agent any

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

   stage('Run Unit Tests') {
      steps {
        echo '🧪 Running Angular unit tests...'
        sh 'npx ng test --watch=false --browsers=ChromeHeadless'
      }
    }


// stage('Fetch Build Artifacts') {
//   steps {
//     copyArtifacts(projectName: 'my-angular', selector: lastSuccessful())
//   }
// }

    stage('Build App') {
      steps {
        echo '⚙️ Building Angular app...'
        sh 'npm run build'
      }
    }
    stage('Archive Build Artifacts') {
  steps {
    echo '📦 Archiving build output...'
sh 'zip -r my-angular.zip dist/*'
archiveArtifacts artifacts: 'my-angular.zip', fingerprint: true  }
}
    stage('Archive Build') {
      steps {
        archiveArtifacts artifacts: 'dist/**/*'
      }
    }

    // stage('Deploy') {
    //   steps {
    //     echo '🚀 Deploying app to /var/www/my-app...'
    //     sh '''
    //       sudo rm -rf /var/www/my-app/*
    //       sudo cp -r dist/my-angular/browser* /var/www/my-app


    //     '''
    //   }
    // }
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

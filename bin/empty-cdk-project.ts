#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EmptyCdkProjectStack } from '../lib/empty-cdk-project-stack';

const app = new cdk.App();
new EmptyCdkProjectStack(app, 'EmptyCdkProjectStack', {
  env:{
    region:'eu-central-1'
  }
 
});
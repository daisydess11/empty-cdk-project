import * as cdk from 'aws-cdk-lib';
import * as EmptyCdkProject from '../lib/empty-cdk-project-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/empty-cdk-project-stack.ts
test('SQS Queue Created', () => {
    const app = new cdk.App();
    //     // WHEN
    const stack = new EmptyCdkProject.EmptyCdkProjectStack(app, 'MyTestStack');
    //     // THEN
    expect(stack).toMatchSnapshot();
});

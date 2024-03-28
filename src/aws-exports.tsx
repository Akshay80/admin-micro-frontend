const awsmobile: any = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://bgwvyvmafffchhwvkqtihi3yue.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-dxufwsohsbegrmiupour5yokcu",
    "aws_cloud_logic_custom": [
        {
            "name": "rest",
            "endpoint": "https://wzj1ejcqud.execute-api.us-east-1.amazonaws.com/prod",
            "region": "us-east-1"
        }
    ],
    "aws_cognito_identity_pool_id": "us-east-1:b7712e31-c80a-432e-81ed-ed0a6eb350a2",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_ZQvgdbYir",
    "aws_user_pools_web_client_id": "3bb4sv1gv73kfj8vjrdu1b5nlb",
    "oauth": {
        "domain": "backendbacba8c6-bacba8c6-prod.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "worldtradex://,https://buy.worldtradex.com/,https://admin-micro-frontend.vercel.app/",
        "redirectSignOut": "worldtradex://,https://buy.worldtradex.com/,https://admin-micro-frontend.vercel.app/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE",
        "APPLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "wtx101702-prod",
    "aws_user_files_s3_bucket_region": "us-east-1"
};

export default awsmobile;
module.exports = ({ env }) => ({
    upload: {
        provider: 'backblaze-b2',
        providerOptions: {
            accountId: env('ACCOUNT_ID'),
            applicationKey: env('APPLICATION_KEY'),
            bucketId: env('BUCKET_ID'),
            endpoint: env('ENDPOINT'),
        },
    },
});
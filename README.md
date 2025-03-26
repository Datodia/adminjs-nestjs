# Adminjs Nestjs example

## How to setup project

 1. clone projcet
 2. use node 20 version like 20.13.1(LTS) its not working node 20+ versions
 3. npm i 
 4. npm run start:dev // for starting project

## How to add new resources?

 1. nest g res posts
 2. inside a mongoose folder add post-model.ts file
 3. copy user-model.ts file and configure it as you want, add new props.
 4. dont forget to change also interface and schema name, like inteface Post and PostSchema
 5. import it inside of mongoose.module.ts file, especially   
``` ts
MongooseModule.forFeature( [ 
  { name:  'Admin', schema:  AdminSchema },
  { name:  'User', schema:  UserSchema },
  //here add new resource
  { name: 'Post', schema: PostSchema }
]),
```
    
7. 	go to post.module.ts and import new mongooseModule.forfeature

 ``` ts
 imports: [
    MongooseModule.forFeature([{name:  'Post', schema:  PostSchem}])
 ],
```

7. inject postModel inside a post.service.ts and write logics that you want.
8. most important part inside an app.module.ts you should add your resource.
``` ts
inject: [
  getModelToken('Admin'),
  getModelToken('User'),
  getModelToken('Post'), // add new resourse
],
```


``` ts
  adminJsOptions: {
    rootPath:  '/admin',
    resources: [
	    { resource:  adminModel },
	    { resource:  userModel },
	    { resource:  PostModel }, // add new models
    ],
    }
```

9. thats all npm run start:dev /admin use username: admin@example.com and pass: password  

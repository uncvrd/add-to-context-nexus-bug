# Migration `20200701221701-make-image-urlartist-optional`

This migration has been generated by Jordan Lewallen at 7/1/2020, 10:17:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Artist" ALTER COLUMN "imageURL" DROP NOT NULL;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200701181819-add-rumor..20200701221701-make-image-urlartist-optional
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator prisma_client {
   provider = "prisma-client-js"
@@ -35,9 +35,9 @@
 model Artist {
   id Int @id @default(autoincrement())
   name String
-  imageURL String
+  imageURL String?
   appleId Int
   followers User[] @relation(references: [id])
   albums Album[] @relation(references: [id])
   rumors Rumor[] @relation(references: [id])
```



# Migration `20200701170410-add-artist`

This migration has been generated by Jordan Lewallen at 7/1/2020, 5:04:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Artist" (
"appleId" integer  NOT NULL ,"id" SERIAL,"imageURL" text  NOT NULL ,"name" text  NOT NULL ,
    PRIMARY KEY ("id"))

ALTER TABLE "public"."Album" ALTER COLUMN "imageURL" DROP NOT NULL;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200701144622-add-artist..20200701170410-add-artist
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
@@ -21,6 +21,13 @@
   title String
   uid String @unique
   appleId Int @unique
   date DateTime
+  imageURL String?
+}
+
+model Artist {
+  id Int @id @default(autoincrement())
+  name String
   imageURL String
-}
+  appleId Int
+}
```



CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text,
	"tags" text[],
	"link" text,
	"github_url" text,
	"featured" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);

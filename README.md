### Blog

Directory structure for posts
```
posts/
-	category-alpha/
	-	series-a/
		-	part-1.md
		-	part-2.md
		- 	metadata.json
	-	series-b/
		-	part-1.md
		-	part-2.md
		- 	metadata.json
-	category-beta/
	-	series-d/
		-	part-1.md
		-	part-2.md
		- 	metadata.json
	-	series-c/
		-	part-1.md
		-	part-2.md
		- 	metadata.json
```

metadata.json
```json
{
    "part-1.md": {
        "name": "Blog Post 1",
        "tags": ["tag1", "tag2"]
    },
}
```
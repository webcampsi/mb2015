---
layout: blog
title: posts, news
---

<div class="container">
{% for post in site.posts %}
<div class="section-posts">
	<div class="post-info">
		<h2><a href="{{ post.url }}">{{ post.title }}</a>
			<div class="date">
				<span>{{ post.date | date_to_string }}</span>
			</div>
		</h2>
	</div>
	<div class="post">
		<p>
			{{ post.excerpt }}
				<p class="post-nav">
					<a href="{{ post.url }}">> Read more</a>
				</p>
		</p>	
	</div>
	<div class="break"></div> 
</div>  
{% endfor %}
</div> 
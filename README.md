# Timeline slider - a Simple jQuery timeline slider with cool animations.

## Live Preview
[demo Link](https://web-stair.github.io/timeline-slider)

## Setup
You need to link the CSS and JS files:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Timeline Slider</title>
  <link rel="stylesheet" href="assets/css/timeline-slider.css">
</head>
<body>
  <!-- Your HTML content goes here -->

  <!-- JS -->
  <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="assets/js/timeline-slider.js"></script>
</body>
</html>
```

## How to Use
Here is an example for the your HTML structure:

```html
	<div class="slider-wrapper">
		<div class="slider-content">
			<div class="slider-item active" style="background-image: url('assets/images/01.jpg')">
				<div class="slide-caption">
					<h3>First Slide</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eveniet enim quibusdam vel ea earum iste fugit, assumenda, excepturi cum, sit optio voluptas commodi debitis, laborum est? Nemo, illum, quo.</p>
				</div>
			</div>
			<div class="slider-item" style="background-image: url('assets/images/02.jpg')">
				<div class="slide-caption">
					<h3>Second Slide</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eveniet enim quibusdam vel ea earum iste fugit, assumenda, excepturi cum, sit optio voluptas commodi debitis, laborum est? Nemo, illum, quo.</p>
				</div>
			</div>
		</div>
		<div class="slider-navs">
			<div class="nav-item active">1990</div>
			<div class="nav-item">1991</div>
		</div>
	</div>
```


## Credits

1. [jQuery](https://jquery.com/)

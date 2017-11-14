# Stopmotion
<div class='ContainerParagraph'>
		<h3>
			Stopmotion is a JQuery plugin to realise stories with 
			<a href='https://en.wikipedia.org/wiki/Stop_motion' target='_blank'>Stop motion</a> 
			technique in web pages.
			<ul>
				<li>
					Add any kind of images (svg, jpg, ...)
				</li>
				<li>
					Add descriptions, link, logos
				</li>
				<li>
					Automatically or manually scroll it: touch it, use mouse scroll, keyboard like youtube
				</li>
				<li>
					100% responsive and scalable
				</li>
				Stopmotion is thin and simple, but you can use it to realise <a href='http://christianspreafico.altervista.org/Apollo/IndexLL.html' target='_blank'>big things!</a>
			<ul>
		</h3>
	</div>
	<div class='ContainerParagraph'>
		<h1>License</h1>
		Stopmotion has two licenses:<br>
		<ul>
			<li>
				<b>Open source license:</b> You can use Stopmotion to build open source and personal projects under the terms of <a href='https://www.gnu.org/licenses/gpl-3.0.html'>GPLv3</a> license.
				If you release the modified version to the public in some way, the GPL requires you to make the modified source code available to the program's users, under the GPL.
				Releasing your project that uses Isotope under the GPLv3, in turn, requires your project to be licensed under the GPLv3.<br>
			</li>
			<li>
				<b>Commercial license:</b> If you are not ok with the terms of the Opensource license, require a commercial license <a href="mailto:christian.spreafico@gmail.com">Write here</a>
			</li>
		</ul>
	</div>
	<div class='ContainerParagraph'>
		<h1>Getting started!</h1>
		<h2>HTML</h2>
		Include JQuery:
		<xmp><script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script></xmp>
		Include Stopmotion.js file:
		<xmp><script type="text/javascript" src="Stopmotion.js"></script></xmp>
		Include Stopmotion stylesheet file:
		<xmp><link rel="stylesheet" href="Stopmotion.css"></xmp>
		Inside body define box for stopmotion:
		<xmp><div class='ContainerStopmotion'></div></xmp>
		<h2>JQuery</h2>
		After the body, paste the database array:
<xmp>var Data = [
	{"ImageSource":"Images/1.svg",},
	{"ImageSource":"Images/2.svg",},
	...
];
</xmp>
		Call Stopmotion:
		<xmp>Stopmotion({});</xmp>
	</div>
	<div class='ContainerParagraph'>
		<h1>Options</h1>
		Change options by specifying them when calling Stopmotion: <code>Stopmotion({width: '300px'});</code>
		<table class='TableOptions'>
			<tr class='TrHeader'>
				<td>
					Name
				</td>
				<td>
					Description
				</td>
			</tr>
			<tr>
				<td class='FirstColumn'>
					width
				</td>
				<td>
					You can change width of Stopmotion container by specifying a value in % or in px or other measure unit
					<xmp>Stopmotion({width: '300px'});</xmp>
					<b>Default:</b> 100%
				</td>
			</tr>
			<tr>
				<td class='FirstColumn'>
					height
				</td>
				<td>
					You can change height of Stopmotion container by specifying a value in % or in px or other measure unit
					<xmp>Stopmotion({height: '300px'});</xmp>
					<b>Default:</b> 100%
				</td>
			</tr>
			<tr>
				<td class='FirstColumn'>
					description
				</td>
				<td>
					If you want to include desctriptions in the photograms, you have to:<br><br>
					Include variable 'Description' in database array and write the description or value '0' if you do not want. Descriction variable support HTML (links included!)
<xmp>var Data = [
	{"ImageSource":"Images/1.svg","Description":"Write the description here",},
	{"ImageSource":"Images/2.svg","Description":"0",},
	...
];
</xmp>
					Specify the option 'description' as true:
					<xmp>Stopmotion({description: true});</xmp>
					<b>Default:</b> false
				</td>
			</tr>
			<tr>
				<td class='FirstColumn'>
					tooltip
				</td>
				<td>
					You can include tooltip on the bar
					<xmp>Stopmotion({tooltip: true});</xmp>
					<b>Default:</b> false
				</td>
			</tr>
			<tr>
		</table>
	</div>
	<div class='ContainerParagraph'>
		<h1>
			Contact
		</h1>
		Find any bugs, want to suggest something --> <a href="mailto:christian.spreafico@gmail.com">Write here</a>
	</div>
	<div style='margin-top: 20px; margin-bottom: 20px; text-align: center;'>
		<b>© 2017 <a href='http://christianspreafico.altervista.org/' target='_blank'>Christian Spreafico</a></b>
	</div>

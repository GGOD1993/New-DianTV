# This imports all the layers for "dian2" into dian2Layers1
#effect showing url http://share.framerjs.com/ek9p1m3gpyb3/;
$= Framer.Importer.load "imported/dian2"
bg=new BackgroundLayer
	backgroundColor:"#EBEFF2"
	width:1024
	height:768
Utils.globalLayers $
animateing="spring(160,19,0,0)"

#cards是卡片的数组，positions是卡片的位置数组
bool=0
cards=[]
mid=[]
right=[]
left=[]
for count in [0..11]
	card=$["card"+count]
	cards.push(card)

for count in [0..11]
	mid[count]=cards[count].x
	cards[count].x-=966
	left[count]=cards[count].x
	right[count]=cards[count].x+966*2

bg.on Events.Click,->
		if bool is 0
			#移到屏幕当中
			for count in [0..5]
				cards[count].animate
					properties:
						x:mid[count]
					curve:animateing
					delay:(0.5-count*0.1)
			bool=1
		else if bool is 1
			#移到屏幕右边
			for count in [0..5]
				cards[count].animate
					properties:
						x:right[count]
					curve:animateing
					delay:(0.5-count*0.1)
			Utils.delay 1,->
				#移动屏幕当中
				for count in [6..11]
					cards[count].animate
						properties:
							x:mid[count]
						curve:animateing
						delay:0.5-(count-6)*0.1
				#移到屏幕左边
				for count in [0..5]
					cards[count].animate
						properties:
							x:left[count]
						time:0	
			bool=2
		else if bool is 2
			for count in [6..11]
				cards[count].animate
					properties:
						x:right[count]
					delay:0.5-(count-6)*0.1
					curve:animateing
			Utils.delay 1,->
				for count in [0..5]
					cards[count].animate
						properties:
							x:mid[count]
						curve:animateing
						delay:0.5-count*0.1
				for count in [6..11]
					cards[count].animate
						properties:
							x:left[count]
						time:0
			bool=1
/*
INSTRUCTION : 
	
	KEYBOARD LAYOUT REFERENCE (UK Qwerty): https://en.wikipedia.org/wiki/British_and_American_keyboards#/media/File:KB_United_Kingdom.svg
	COMPARE YOUR LAYOUT TO THE REFERENCE : https://keycode.info/ (use the "event.code" as comparison e.g in this file <letter> would have the result of "event.key" try to keep them short)
		- e.g KeyQ is always at the same position on standards keyboard but in QWERTY the "event.key" would give Q while in AZERTY it would give A

	HOW TO ? Go check the true actions not by looking at the "never updated jpeg showing a keyboard + mouse" but :
	-	by going into the keybinding
		- selecting an action without shortcut
			- rebinding it with each key of your keyboard following the same KEYBOARD LAYOUT REFERENCE
				- but each time you don't actually rebind it, you only check for what it's used for


	APPLY MODIFIER'S COLOR TO TEXT :
		- "M1 your text " -> "<span class=\"modificateur_1\">M1</span> your text"
		1- modifier 1 (orange) = modificateur_1
		2- interaction mode (Purple) = modificateur_2
		3- scan mode (Green) = modificateur_3
		4- mining mode (Cyan) = modificateur_4
		5- advanced cam mode (Blue) = modificateur_5
		6- modifier 2 (Salmon / pink) = modificateur_6
	
	LINE BREAK :
		- "your text line 1 your texte line 2" -> "your text line 1<br>your text line 2"

// keys (not localized) to be colored, following the same order as in "Color To Text Instruction"
*/
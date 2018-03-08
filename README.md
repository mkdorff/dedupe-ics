# dedupe-ics
Get rid of duplicate events

Quick and dirty. On you ICS file, remove the top everything until you get into your first BEGIN:VEVENT and remove the last ENDCALENDAR. Use Regex to put everything between each BEGIN:VEVENT and END:VEVENT into back ticks (\`). Put a comma after ever END and wrap the whole thing in []'s. import that into the index.js file. easy

Run the script. add the beginning and end of your files back on. Mostly everything should be good, except we will have lose any hardcoded '\n's and commas need to be escaped with a \ unless it doesn't becase idk.

Also, it's just a shallow deduper. I look at the SUMMARY and VSTART of each event. if they're the same I count them as the same

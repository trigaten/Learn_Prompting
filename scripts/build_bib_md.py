from pybtex.database.input import bibtex

# Define the input file
input_file = '../bibliography.bib'

# Define the output file
output_file = 'bib.md'

# Create a BibTeX parser
parser = bibtex.Parser()

# Parse the .bib file
bib_database = parser.parse_file(input_file)

# Open the output file in write mode
with open(output_file, 'w') as outfile:
    # For each entry in the .bib file
    for citation_key in bib_database.entries:
        entry = bib_database.entries[citation_key]
        # Extract the title, author, year
        title = entry.fields.get('lp_title', entry.fields.get('title', 'No title'))
        if "author" in entry.persons:
            author_list = entry.persons['author']
        else: 
            author_list = entry.persons['authors']
        author = ' and '.join(str(person) for person in author_list)
        year = entry.fields.get('year', 'No year')
        # Write the entry to the output file
        outfile.write(f'#### {title}(@{citation_key})\n\n')
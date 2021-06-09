def largest_substring( word ):
    maxSize = 0
    substring = ""
    for i in word:
        if i in substring:
            for indexSub, letter in enumerate(substring):
                if letter == i:
                    ''' It was wrong to been doing a substring on the original word.
                        We want to do the substring on the substring we are already
                        working on, not in the whole word'''
                    substring = substring[indexSub+1:]
                    substring += i
                    break
        else:
            substring += i
            ''' only getting the size when we know that the letter is
                not repeated
            '''
            maxSize = max(len(substring), maxSize)
    return maxSize

print("Largest substring", largest_substring("abcabcbb"))

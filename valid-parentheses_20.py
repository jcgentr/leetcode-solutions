class Solution:
    def isValid(self, s: str) -> bool:
        closeToOpen = {
          ")": "(",
          "}": "{",
          "]": "["
        }
        stack = []
        for c in s:
            if c in closeToOpen: # closing paren
                if len(stack) > 0 and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    return False
            else: # open paren
                stack.append(c)
                
        return True if len(stack) == 0 else False
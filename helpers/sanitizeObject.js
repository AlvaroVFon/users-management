const sanitizeObject = (object, blackList) => {
  const sanitizedObject = { ...object }

  for (const header in sanitizedObject) {
    if (blackList.includes(header)) {
      delete sanitizedObject[header]
    }
  }

  return sanitizedObject
}

export { sanitizeObject }

const formatPathToSlug = (path: string) => {
  return path.toLowerCase().split(" ").join("-");
};

export default formatPathToSlug;

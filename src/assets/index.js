const importAll = (requireContext) => requireContext.keys().forEach(requireContext)

try {
  console.log(123)
  importAll(require.context('./icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

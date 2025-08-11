require 'json'
require 'pathname'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
  s.name           = package['name']
  s.version        = package['version']
  s.summary        = package['summary']
  s.description    = package['description']
  s.author         = { package['author']['name'] => package['author']['url'] }
  s.license        = package['license']
  s.homepage       = package['homepage']
  s.source         = { :git => 'https://github.com/wonday/react-native-pdf.git', :tag => "v#{s.version}" }
  s.requires_arc   = true
  s.platform       = :ios, '13.0'

  # This is the magic line that makes it all work for Fabric
  s.header_dir     = package['name']
  install_modules_dependencies(s)

  s.source_files   = 'ios/**/*.{h,m}'

end

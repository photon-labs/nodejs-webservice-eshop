cd source
pwd
jscoverage lib lib-cov
mv lib lib-orig
mv lib-cov lib
mocha -R xunit > ../do_not_checkin/target/surefire/TEST-AllTest.xml
mocha -R mocha-lcov-reporter > ../do_not_checkin/target/surefire/coverage.dat
rm -rf lib
mv lib-orig lib
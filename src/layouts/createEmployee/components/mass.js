<MDBox py={2} pl={2} pr={2} sx={{ backgroundColor: '#F5F5F5' }}>
                                        <Grid container spacing={3}>
                                             <Grid item xs={12} sm={6}>
                                                  {/* person view card */}
                                                  <PersonView
                                                       firstname={userD?.firstName}
                                                       lastName={userD?.lastName}
                                                       role={userD?.role?.roleType}
                                                       designation={'Software Engineer'}
                                                       email={userD?.email}
                                                       mobile={userD?.mobileNo}
                                                       isActive={userD?.isActive}
                                                       isBlocked={userD?.isBlocked}
                                                  />
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                    
                                             </Grid>
                                        </Grid>
                                   </MDBox>